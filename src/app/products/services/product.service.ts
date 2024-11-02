import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { API } from "src/config/api.config";
import { Settings } from "../dto/product-settings.dto";
import { ProductApiResponse } from "../dto/product-api-response.dto";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private http = inject(HttpClient);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  constructor() {}
  getProducts(setting: Settings) {
    const { limit, skip } = setting;
    return this.http.get<ProductApiResponse>(
      `${API.products}?limit=${limit}&skip=${skip}`
    );
  }
}
