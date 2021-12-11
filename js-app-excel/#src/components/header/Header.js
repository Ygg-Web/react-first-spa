import { ExcelComponent } from "../../core/ExcelComponent";
import { $ } from "../../core/dom";
import { changeTitle } from "../../redux/actions";
import { defaultTitle } from "../../constants";
export class Header extends ExcelComponent {
    static className = 'excel__header'
    constructor(root, options) {
        super(root, {
            name: 'Header',
            listeners: ['input'],
            ...options
        })
    }

    toHTML() {
        const title = this.store.getState().title || defaultTitle
        return `
        <input type="text" class="input" value="${title}"></input>
        <div>
            <div class="button">
                <i class="material-icons">delete</i>
            </div>
            <div class="button">
                <i class="material-icons">logout</i>
            </div>
        </div>
                `
    }

    onInput(event) {
        const target = $(event.target)
        console.log('text', $(event.target).text())
        this.$dispatch(changeTitle(target.text()))
    }
}