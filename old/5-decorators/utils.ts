export function LogEventValue(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {
            const inputRef = e.target as HTMLInputElement;
            console.log(inputRef.value);
            originalFn(e);
        }
    }
}

export function SentToSentry(_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    const originalFn = descriptor.value;
    return {
        ...descriptor,
        value: (e: Event) => {
            try {
                originalFn(e);
            } catch (err) {
                // http to server
                console.log(err)
            }

        }
    }
}

export function Debounce(ms: number) {
    let timeId: number | null;
    return (_target: object, _key: string, descriptor: PropertyDescriptor): PropertyDescriptor => {
        const originalFn = descriptor.value;
        return {
            ...descriptor,
            value: (...args: unknown[]) => {
                if (timeId) {
                    clearTimeout(timeId);
                }
                timeId = setTimeout(() => {
                    originalFn(...args);
                }, ms)
            }
        }
    }
}

export function SavePersistence(target: any, key: string): void {
    const localKey = `${target.constructor.name}_${key}`;

    const getter = () => {
        // console.log(`GET: ${key} => ${val}`);
        return localStorage.getItem(localKey);
    }
    const setter = (newVal: any) => {
        // console.log(`GET: ${key} => ${val}`);
        localStorage.setItem(localKey, newVal);
    }

    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true
    })
}