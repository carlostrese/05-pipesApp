import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'canfly'
})
export class CanflyPipe implements PipeTransform{
  transform(value: boolean):string {
    return  (value ===true) ? 'vuela  ': 'no vuela';
  }

}
