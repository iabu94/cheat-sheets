import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

export function registerIcons(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer, icons: string[]) {
  icons.forEach(icon => {
    matIconRegistry.addSvgIcon(
      icon,
      domSanitizer.bypassSecurityTrustResourceUrl(`../assets/icons/${icon}.svg`)
    );
  });
}
