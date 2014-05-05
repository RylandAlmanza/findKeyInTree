Object.prototype.findKeyInTree = function (key) {
    var i,
        result,
        matches = [],
        caseSensitive = arguments[1] === false ? false : true,
        isFinal = arguments[2] === false ? false : true;

    for (i in this) {
        if (caseSensitive ? i === key : i.toLowerCase() === key.toLowerCase()) {
            if (isFinal) {
                matches.push(i);
            } else {
                return i;
            }
        }

        if (this[i].constructor === {}.constructor) {
            result = this[i].findKeyInTree(key, caseSensitive, null);
            if (result) {
                if (isFinal) {
                    matches.push(i + '.' + result);
                } else {
                    return i + '.' + result;
                }
            }
        }
    }
    if (isFinal) {
        if (matches.length > 1) {
            return matches;
        } else if (matches.length === 1) {
            return matches[0];
        } else {
            return false;
        }
    } else {
        return false;
    }
};
