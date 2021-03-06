import { Component, OnInit<% if(!!viewEncapsulation) { %>, ViewEncapsulation<% }%><% if(changeDetection !== 'Default') { %>, ChangeDetectionStrategy<% }%> } from '@angular/core';


@Component({
  selector: '<%= selector %>',<% if(inlineTemplate) { %>
  template: `<div class="ui-g">
  <div class="ui-g-12 ui-md-4">
      <p-scrollPanel [style]="{width: '100%', height: '200px'}">
          <div style="padding:1em;line-height:1.5">
              The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved
              son Michael has just come home from the war, but does not intend to become part of his father's business.
              Through Michael's life the nature of the family business becomes clear. The business of the family is just
              like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence
              whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head
              of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from
              the war, but does not intend to become part of his father's business. Through Michael's life the nature of
              the family business becomes clear. The business of the family is just like the head of the family, kind and
              benevolent to those who give respect, but given to ruthless violence whenever anything stands against the
              good of the family.
          </div>
      </p-scrollPanel>
  </div>`,<% } else { %>
  templateUrl: './<%= dasherize(name) %>.component.html',<% } if(inlineStyle) { %>
  styles: []<% } else { %>
  styleUrls: ['./<%= dasherize(name) %>.component.<%= styleext %>']<% } %><% if(!!viewEncapsulation) { %>,
  encapsulation: ViewEncapsulation.<%= viewEncapsulation %><% } if (changeDetection !== 'Default') { %>,
  changeDetection: ChangeDetectionStrategy.<%= changeDetection %><% } %>
})
export class <%= classify(name) %>Component{
  
}
