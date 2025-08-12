// depentency inversion principle

/* 
    * depending upon interfaces or abstract functions and classes rather upon concrete functions and classes.
*/


// wrong

http.get('https://api.example.com', (res) => {
    this.setState({
        key1: res.value1,
        key2: res.value2,
        key3: res.value3,
    });
});

// correct
const httpRequest = (url, setState) => {
    http.get(url, (res) => setState.setValues(res));
}

// state set in another function
const setState = () => {
    setValues: (res) => {
        this.setState({
            key1: res.value1,
            key2: res.value2,
            key3: res.value3,
        })
    }
}

// Http request, state set in a different function
httpRequest('https://api.example.com', setState);