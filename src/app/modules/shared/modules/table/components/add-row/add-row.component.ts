import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-add-row',
    templateUrl: './add-row.component.html',
    styleUrls: ['./add-row.component.scss'],
})
export class AddRowComponent implements OnInit {
    @Input() public data;

    @Output() public controlResult = new EventEmitter();

    public addRowGroup: FormGroup;

    constructor(private fb: FormBuilder) {}

    public ngOnInit(): void {
        this.initForm();
    }

    public submit(): void {
        this.controlResult.emit({
            type: 'addRow',
            data: { row: Object.values(this.addRowGroup.value) },
        });
    }

    private initForm() {
        this.addRowGroup = this.fb.group({
            ...this.data.headers.reduce((obj, item) => {
                return {
                    ...obj,
                    [item]: [0, Validators.required],
                };
            }, {}),
        });
    }
}
