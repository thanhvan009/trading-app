import { NgClass, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { ToastManager } from '@blocks/toast/toast.manager';
import { mockSelectedUser, mockUsersData, mockMessagesData } from 'src/app/shared/mock-data/chats.mock';

@Component({
    selector: 'app-chat',
    templateUrl: './chats.component.html',
    styleUrls: ['./chats.component.scss'],
    standalone: true,
    imports: [
        PageLayoutComponent,
        FormsModule,
        ReactiveFormsModule,
        NgClass,
        NgIf,
        NgFor,
        RouterLink,
        TranslateModule,
        MatTabsModule,
        ProgressBarComponent,
    ],
})
export class ChatsComponent {
    public model: any = { ...mockSelectedUser };
    public users: any = [...mockUsersData];
    public selectedUser: any = { ...mockSelectedUser };
    public messagesData:any = [...mockMessagesData ];
    public selectedIndex = 0;
    public formGroup!: FormGroup<{
        message: FormControl<string>;
    }>;

    constructor(
        public storeService: StoreService,
        public router: Router,
        public toastManager: ToastManager,
    ) {
        this.storeService.isLoading.set(false);
    }


    public ngOnInit(): void {

        this.formGroup = new FormGroup({
            message: new FormControl<string>(
                {
                    value: '',
                    disabled: false,
                },
                { validators: [], nonNullable: true }
            ),
        });

    }

    onSelectUser(item: any, index: number) {
        this.selectedUser = item;
        this.selectedIndex = index;
        this.messagesData = [ ...mockMessagesData ];
    }

    ngAfterViewInit() {
    }

    onClickSubmit() {
        const keySearch = this.formGroup.controls?.message?.value;
        if (keySearch?.length) {
            this.formGroup.reset();
            const newMessage = {
                text: keySearch,
                isMine: true,
                time: '23:59'
            };
            this.messagesData = [
                ...this.messagesData,
                {...newMessage}
            ]
        }
    }
}
