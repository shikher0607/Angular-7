import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private loggingSevice: LoggingService, private accountsService: AccountsService){}


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    /* console.log('A server status changed, new status: ' + status); */
  //  this.loggingSevice.logStatus(status);
  this.accountsService.statusUpdated.emit(status);
  }

}
