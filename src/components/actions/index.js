
export const select = (date) =>{
   // alert(date.getMonth()+"day: " +date.getDate()+" "+ date.getDay());
    return{
        type: "DATE_SELECTED",
        payload: date
    }
}