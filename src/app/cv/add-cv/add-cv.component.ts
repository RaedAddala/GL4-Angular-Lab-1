import {Component, OnDestroy, OnInit} from "@angular/core";
import {
  AbstractControl,
  FormBuilder, FormGroup,
  Validators,
} from "@angular/forms";
import { CvService } from "../services/cv.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { APP_ROUTES } from "src/config/routes.config";
import { Cv } from "../model/cv";
import {FormService} from "../../services/form.service";
import {cinAsyncValidator} from "../validators/cinvalidator";
import {addFormCustomValidator} from "../validators/formvalidator";

@Component({
  selector: "app-add-cv",
  templateUrl: "./add-cv.component.html",
  styleUrls: ["./add-cv.component.css"],
})
export class AddCvComponent implements OnInit , OnDestroy{
  constructor(
    private cvService: CvService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private formService: FormService,
    private cinAsyncValidator: cinAsyncValidator
  ) {}

  form: FormGroup = this.formBuilder.group({
    name: ["", Validators.required],
    firstname: ["", Validators.required],
    path: [""],
    job: ["", Validators.required],
    cin: [
      "",
      {
        validators: [Validators.required, Validators.pattern("[0-9]{8}")],
        asyncValidators: [this.cinAsyncValidator.validate.bind(this.cinAsyncValidator)],
        updateOn: 'blur',
      },
    ],
    age: [
      0,
      [Validators.required, Validators.min(1)] // Optionally, validate the minimum age
    ],
  },
    {
      validators:[addFormCustomValidator]
    }
);
  ngOnInit(): void {
    // Disable the path field if the age is less than 18
    this.form.get('age')?.valueChanges.subscribe(age => {
      console.log('age:', age);
      if (age >= 18) {
        this.form.get('path')?.enable();
      } else {
        this.form.get('path')?.disable();
        this.form.get('path')?.setValue(''); // Clear the field if disabled
      }
    });
    if (this.formService.isFormSaved()) {
      this.form.patchValue(this.formService.getForm());
    }

    this.form.valueChanges.subscribe(form => {
        this.formService.saveForm(form);
      }
    )
  }
  ngOnDestroy(): void {
    this.formService.clearForm();
  }



  addCv() {
    if (this.form.valid) {
      this.cvService.addCv(this.form.value as Cv).subscribe({
        next: (cv) => {
          this.router.navigate([APP_ROUTES.cv]);
          this.toastr.success(`Le cv ${cv.firstname} ${cv.name} a été ajouté avec succès.`);
        },
        error: (err) => {
          this.toastr.error(`Une erreur s'est produite, veuillez contacter l'admin.`);
          console.error('Error occurred while adding CV:', err); // Optional: Log the error for debugging
        },
      });
    } else {
      this.toastr.error('Veuillez remplir tous les champs requis correctement.');
      this.form.markAllAsTouched();
    }
  }

  get name(): AbstractControl {
    return this.form.get("name")!;
  }
  get firstname() {
    return this.form.get("firstname");
  }
  get age(): AbstractControl {
    return this.form.get("age")!;
  }
  get job() {
    return this.form.get("job");
  }
  get path() {
    return this.form.get("path");
  }
  get cin(): AbstractControl {
    return this.form.get("cin")!;
  }
}
