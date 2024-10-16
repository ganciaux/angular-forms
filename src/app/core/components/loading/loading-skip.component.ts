import { HttpContextToken } from "@angular/common/http";

export const loadingSkip = new HttpContextToken(
  () => false
)