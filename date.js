function myFunction() {
    var date = new Date();
    var mt = date.getMonth();
    var months = [" ม.ค.", " ก.พ.", " มี.ค.", " เม.ย.", " พ.ค.", " มิ.ย.", " ก.ค.", " ส.ค.", " ก.ย.", " ต.ค.", " พ.ย.", " ธ.ค."];

    var currentD = months[mt] + " (qty)"; 

    Logger.log("Current Month is: " +currentD); 
}