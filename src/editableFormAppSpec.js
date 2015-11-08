describe('editableFormAppSpec', function(){
    var scope,
        element,
        compiled,
        html,
        editableText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sem sem, porttitor et laoreet sed, scelerisque bibendum mi. Vivamus commodo condimentum massa dapibus pharetra. Nullam quis nulla erat. Aenean sed tortor urna. Ut lacinia massa bibendum felis aliquam tempor. Sed vel sem pulvinar, pulvinar neque ut, interdum sapien. Cras porta felis nec aliquet porttitor. Vestibulum placerat, eros quis ullamcorper vestibulum, lacus libero hendrerit quam, id dapibus ipsum felis et tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae';

    beforeEach(module('editableFormApp'));
    beforeEach(module('editable-form.html'));
    beforeEach(inject(function($rootScope, $compile){

        html = '<make-editable rendereditable="true">'
        + '<span class="span">' + editableText + '</span>'
        + '</make-editable>';

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        scope.$digest();

    }));

    it('should render the element correctly', function(){
        expect(element.find('.editable-container').length).toBe(1);
        var button = element.find('button');
        expect(button.text()).toContain('Save');
        expect(button.text()).not.toContain('Edit');
        expect(button.length).toBe(1);
        expect(button.attr('ng-click')).toBeTruthy();

        var editableTextElement = element.find('[contenteditable]');
        expect(editableTextElement.attr('contenteditable')).toBe('true');
        expect(editableTextElement.find('ng-transclude').length).toBe(1);
        expect(editableTextElement.find('ng-transclude').text()).toContain(editableText);
    });
});