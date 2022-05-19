function previousDay(year, month, day) {
    let p_day = day - 1;
    let p_month = month;
    let p_year = year;
    if (p_day == 0) {
        p_month = month - 1
        if (p_month == 0) {
            p_month = 12;
            p_year = year - 1;
        }
        switch (p_month) {
            case 1:
                p_day = 31;
                break;
            case 2:
                p_day = 28;
            case 3:
                p_day = 31;
                break;
            case 5:
                p_day = 31;
                break;
            case 7:
                p_day = 31;
                break;
            case 8:
                p_day = 31;
                break;
            case 10:
                p_day = 31;
                break;
            case 12:
                p_day = 31;
                break;
            
            default:
                p_day = 30
        }
       
    }
    return `${p_year}-${p_month}-${p_day}`

}

console.log(previousDay(2016, 10, 1));