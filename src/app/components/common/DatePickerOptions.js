class DatePickerOptions{
  constructor(options = {}){
    this.minDate = options.minDate || null;
    this.maxDate = options.maxDate || null;
    this.isOpen = options.isOpen || false;
  }
  
  open($event){
    $event.preventDefault();
    $event.stopPropagation();
    
    this.isOpen = true;
  }
}

export default DatePickerOptions;