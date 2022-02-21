import { setHTMLValue } from '../../helper/utils';

export function render(data) {
    let render = `<section class="main-content__fields fields">
          <div class="fields__id">Id</div>
          <div class="fields__first">First name</div>
          <div class="fields__last">Last name</div>
          <div class="fields__age">Age</div>
          <div class="fields__city">City</div>
          <div class="fields__number">Number</div>
          <div class="fields__email">Email</div>
          <div class="fields__company">Company</div>
        </section>`;
    
    if (localStorage.getItem('databases') === 'mySql') {
        if (data.length >= 1) {
        for (let i = 0; i < data[0].length; i++){
            render += `
            <section class="main-content__info info">
                <div class="info__id">${data[i].Id}</div>
                <div class="info__first">${data[i].FirstName}</div>
                <div class="info__last">${data[i].LastName}</div>
                <div class="info__age">${data[i].Age}</div>
                <div class="info__city">${data[i].City}</div>
                <div class="info__number">${data[i].PhoneNumber}</div>
                <div class="info__email">${data[i].Email}</div>
                <div class="info__company">${data[i].Company}</div>
            </section>`
        }
        setHTMLValue('content', render);
        } else {
            render += `<div class="main-content__no-info">There is no data in the database</div>`
            setHTMLValue('content', render);
        }
    } else if (localStorage.getItem('databases') === 'mongoDB') {
        if (data.length >= 1) {
            for (let i = 0; i < data.length; i++){
                let str = data[i]._id;
                let value = ``;
                
                if (str.length > 3) {
                    value = `${str.substr(0, 4)}...`;
                }

            render += `
            <section class="main-content__info info">
                <div class="info__id" max="3">${value}</div>
                <div class="info__first">${data[i].firstName}</div>
                <div class="info__last">${data[i].lastName}</div>
                <div class="info__age">${data[i].age}</div>
                <div class="info__city">${data[i].city}</div>
                <div class="info__number">${data[i].phoneNumber}</div>
                <div class="info__email">${data[i].email}</div>
                <div class="info__company">${data[i].company}</div>
            </section>`
        }
        setHTMLValue('content', render);
        } else {
            render += `<div class="main-content__no-info">There is no data in the database</div>`
            setHTMLValue('content', render);
        }
    }
}