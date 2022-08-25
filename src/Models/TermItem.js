class TermItem{
    term = '';
    definition = ''
    id = 0;
    imageURL = ''
    constructor(id,term, definition, imageURL) {
        this.id = id;
        this.term = term;
        this.definition = definition;
        this.imageURL = imageURL
    }
}

export default TermItem;