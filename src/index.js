module.exports = {
    /**
     * Validates domain name. Complete list of rules are available at
     * http://www.nic.ag/rules.htm
     */
    validateDomainName: function (domainName) {
        var error = "";

        if (typeof domainName === "undefined") { throw new TypeError('Input domainName cannot be blank'); }

        if (!/^[a-zA-Z0-9-]{1,63}(?:\.[a-zA-Z]{2,}){0,3}$/g.test(domainName)) {
            error = "Use only letters, numbers, or hyphen (\"-\"). Domain names cannot have more than 63 characters, not including .AG, .COM.AG, .NET.AG, .ORG.AG, .EDU.AG, .GOV.AG, ETC. Minimum length of a domain name is 1 character, not including extensions. ";
        } else if (domainName.startsWith("-") || domainName.endsWith("-")) {
            error = "Domain names cannot begin or end with a hyphen";
        } else if (domainName.length > 255) {
            error = "Maximum length of a complete (Fully Qualified, FQDN) domain name (including .separators) should be 255 characters";
        }

        return { isValid: error.length == 0, errorMsg: error };
    }
};

//module.exports.validateDomainName("l3");