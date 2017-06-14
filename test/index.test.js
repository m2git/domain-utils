var expect = require('chai').expect;
var domainUtils = require('../src/index.js');

describe('validateDomainName', function () {
    it('should throw error if domainName is not passed', function () {
        expect(domainUtils.validateDomainName).to.throw(TypeError);
    });

    it('should return object with isValid and errorMsg properties', function () {
        var validationResult = domainUtils.validateDomainName('');
        expect(validationResult).to.has.property('isValid').that.is.a('boolean');
        expect(validationResult).to.has.property('errorMsg').that.is.a('string');
    });

    it('should use only letters, numbers, or hyphen ("-")', function () {
        var validationResult = domainUtils.validateDomainName('local-ho3st');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;

        validationResult = domainUtils.validateDomainName('localhost$');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;
    });

    it('should not begin or end with a hyphen', function () {
        var validationResult = domainUtils.validateDomainName('local-');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;

        var validationResult = domainUtils.validateDomainName('-local');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;
    });

    it('should not have more than 63 characters (not including .AG, .COM)', function () {
        var validationResult = domainUtils.validateDomainName('localhost');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;

        var validationResult = domainUtils.validateDomainName('dslkjflkdsjfkafdskjfklajflkdsfjkfdsjfalkjfelijfoifjrflsjgdligjgilrjgl');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;
    });

    it('should have Maximum length (including .separators) of 255 characters', function () {
        var validationResult = domainUtils.validateDomainName('ponds-uat.unileversolutions.com');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;

        var validationResult = domainUtils.validateDomainName('pondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondspondsponds-uat.unileversolutions.com');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;
    });

    it('should have Minimum length (not including extensions) of 1 character.', function () {
        var validationResult = domainUtils.validateDomainName('');
        expect(validationResult).to.have.property('isValid', false);
        expect(validationResult.errorMsg).to.not.be.empty;

        var validationResult = domainUtils.validateDomainName('axe.jp');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;
    });

    it('may begin with a digit', function () {
        var validationResult = domainUtils.validateDomainName('4axe.jp');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;
    });

    it('may contain multiple dots(.)', function () {
        var validationResult = domainUtils.validateDomainName('www.amazon.co.in');
        expect(validationResult).to.have.property('isValid', true);
        expect(validationResult.errorMsg).to.be.empty;
    });
});