enum Size {
    S = 42,
    M = 48,
    XL = 52
}

let size1 = Size.M;
let size2 = Size[42];

enum UserActions {
    DELETE = '[USER MODULE] DELETE USER!!',
    CREATE = '[USER MODULE] CREATE USER!!',
    REMOVE = DELETE
}

function reducer(_: any, action: UserActions) {
    switch (action) {
        case UserActions.CREATE : {
            break;
        }
        case UserActions.DELETE : {
            break;
        }
    }
}