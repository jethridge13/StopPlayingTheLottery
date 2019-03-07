import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}
