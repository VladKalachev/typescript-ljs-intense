abstract class AbstractControl<T> {
    public abstract model: T;

    public abstract getValue(): T;


    public onFocus() {
        // common logic;
    }

    public onBlur() {
        // common logic;
    }
}


class MHDropDown extends AbstractControl<{ name: string, value: string }> {
    public model = {name: '', value: ''};


    public getValue(): { name: string; value: string } {
        // some
        return {name: '', value: ''};
    }
}