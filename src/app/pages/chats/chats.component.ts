import { NgClass, NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PageLayoutComponent } from '@layouts/page-layout/page-layout.component';
import { MatTabsModule } from '@angular/material/tabs';
import { StoreService } from '@services/store.service';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { ToastManager } from '@blocks/toast/toast.manager';
import { mockSelectedUser, mockUsersData } from 'src/app/shared/mock-data/chats.mock';

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
    public selectedIndex = 0;

    constructor(
        public storeService: StoreService,
        public router: Router,
        private activatedRoute: ActivatedRoute,
        public toastManager: ToastManager,
    ) {
        this.storeService.isLoading.set(true);
    }


    public ngOnInit(): void {
        setTimeout((_) => {
            this.storeService.isLoading.set(false);
        }, 1000);

    }

    onSelectUser(item: any, index: number) {
        this.selectedUser = item;
        this.selectedIndex = index;
    }

    ngAfterViewInit() {
    }

    public onClickSubmit() {

    }
}
