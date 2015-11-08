describe('optIn', function(){
    var scope,
        element,
        compiled,
        html

    beforeEach(module('simpleSignupFormDirective'));
    beforeEach(module('/templates/opt-in.html'));

    beforeEach(inject(function($rootScope, $compile){
        var html = '<opt-in>'
        + '<div class="brand-logo" style="height: 200px; width: 100%; background-color: red; margin-bottom: 20px;"></div>'
        + '</opt-in>';

        scope = $rootScope.$new();
        compiled = $compile(html);
        element = compiled(scope);
        element.find('#first-name').val('Mike');
        element.find('#last-name').val('Tran');
        element.find('#email').val('mike.tran@leafcutter.com.au');
        scope.$digest();

    }));

    it('should render the element correctly', function(){
        //run the unit test
        expect(element.find('.brand-logo').length).toBe(1);
        expect(element.find('.brand-logo').attr('style')).toBe('height: 200px; width: 100%; background-color: red; margin-bottom: 20px;');
        expect(element.find('#first-name').length).toBe(1);
        expect(element.find('#last-name').length).toBe(1);
        expect(element.find('#email').length).toBe(1);
    });

});