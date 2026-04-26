import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenseCase',
  standalone: true
})
export class SentenseCasePipe implements PipeTransform {

  transform(value: string): string {

    if (!value) return '';

    const parts = value.split(/([.!?])/);

    const result: string[] = [];

    for (let i = 0; i < parts.length; i++) {

      const current = parts[i];

      if (current === '.' || current === '!' || current === '?') {
        result.push(current + ' ');
        continue;
      }

      const sentense = current.trim();

      if (sentense.length === 0) continue;

      result.push(sentense.charAt(0).toUpperCase() + sentense.slice(1).toLowerCase());
    
    }

    return result.join('');
  }

}
