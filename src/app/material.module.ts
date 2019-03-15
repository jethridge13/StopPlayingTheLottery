import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatListModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}
