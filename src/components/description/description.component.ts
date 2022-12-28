import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DescriptionConfigInterface } from '../../assets/js/interface';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent {
  config!: DescriptionConfigInterface;

  @Input() set setConfig(config: DescriptionConfigInterface | undefined) {
    this.config = config as DescriptionConfigInterface;
  }
}
