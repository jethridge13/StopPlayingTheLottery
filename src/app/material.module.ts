import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatListModule,
        MatToolbarModule
    ]
})

export class MaterialModule {}
