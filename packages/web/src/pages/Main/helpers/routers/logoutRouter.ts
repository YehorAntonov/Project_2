export function logoutUser() {
    fetch('/main/logout', {
        method: 'POST'
    }).then((res) => {
        window.location.href = res.url;
    })
}
