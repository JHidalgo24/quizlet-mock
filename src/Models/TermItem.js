class TermItem{
    term = '';
    definition = ''
    id = 0;
    imageURL = ""
    hasImage = false;
    constructor(id,term, definition, imageURL,hasImage) {
        this.id = id;
        this.term = term;
        this.definition = definition;
        this.imageURL = imageURL
        this.hasImage = hasImage;
    }
}

export default TermItem;