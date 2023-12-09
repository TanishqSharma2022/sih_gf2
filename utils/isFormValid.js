export const isFormValid = (errors) => {
    if(Object.keys(errors).length > 0){
        return true;
    }else{
        return false;
    }
}