function copyText(params) {
    var copyTextArea = document.getElementById('copyTextArea');
    copyTextArea.select();
    // above code selects the text area

    document.execCommand('copy');
    // above code copies the selected text, execCommand is a built-in function in JavaScript that is used to copy the selected text 


    updateCopyButtonText();
    // above code updates the button text
}