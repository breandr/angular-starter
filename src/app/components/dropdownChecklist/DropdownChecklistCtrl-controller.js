export default class{
  constructor(){
    this.selected = [];
    this.isAllChecked = true;
  }
  
  getSelected(){
    return this.selected.length === 0 ? 'All' : _.pluck(this.selected, this.itemLabelProp).join(', ');
  }
}