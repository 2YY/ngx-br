import {Component, Input, NgModule} from '@angular/core';
import { NgxBrModule } from 'ngx-br';
import {Meta, moduleMetadata, Story} from '@storybook/angular';

@Component({
	selector: 'lib-example',
	template: `
		<table>
			<thead>
				<tr> <th>BrPipe is</th><th>Result</th> </tr>
			</thead>
			<tbody>
				<tr>
					<td>disabled</td>
					<td [innerHTML]="text"></td>
				</tr>
				<tr>
					<td>enabled</td>
					<td [innerHTML]="text | ngxBr"></td>
				</tr>
			</tbody>
		</table>
	`,
	styles: [],
})
class ExampleComponent {
	@Input() text: string;
}

@NgModule({
	declarations: [ExampleComponent],
	imports: [NgxBrModule],
	exports: [ExampleComponent],
})
class ExampleModule {}

export default {
	title: 'Example/Br',
	component: ExampleComponent,
	decorators: [moduleMetadata({ imports: [ExampleModule] })],
} as Meta;

const Template: Story<ExampleComponent> = (args: ExampleComponent) => ({
  component: ExampleComponent,
  props: args
});

export const Demo = Template.bind({});
Demo.args = {
  text: 'blur\nblur\nblur'
};
