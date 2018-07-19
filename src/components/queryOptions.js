
export default (query, variables) => {
     return {
        method: 'POST',
        headers: {
            'Authorization':`Bearer ${this.props.token.access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables

        })
    }
}