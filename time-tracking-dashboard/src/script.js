
const buttons = document.querySelectorAll('.activity-tracker-option');

let data= [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]



const activateClickedButton = (button) => {
  buttons.forEach(b => b.classList.remove('active')) 
    button.classList.add('active')
  };

buttons.forEach(button =>{
  button.addEventListener('click', function (e) {
    activateClickedButton(button)
    const clickedOption = button.dataset.option
    console.log(clickedOption);
    renderCards(clickedOption)
  });
});

const clearActivities = () => {
  //Clear all activities from html
  const activities = document.querySelectorAll('.card')
  activities.forEach(a => a.remove())
}
  
const renderCards = (clickedOption)=>{
  clearActivities();
  const activityTracker = document.querySelector('.main-container')

  const calcTimeframe = (option) => {
    if (option === 'daily') {
        return 'Yesterday'
    } else if (option === 'weekly') {
        return 'Last Week'
    } else if (option === 'monthly') {
        return 'Last Month'
    }
}

  data.forEach(activity => {
    const name = activity.title;
    const activityClass = name.toLowerCase().replace(' ', '-')
    const timeFrames = activity.timeframes[clickedOption];
    const previousTimeframe = calcTimeframe(clickedOption)
    const section = document.createElement('div')
    section.classList.add('card')
    const stringToInject = `
  
        <div class="card-part1" id="${activityClass}">
          <div class="card-bg-img bg-[url(../images/icon-${activityClass}.svg)]"></div>
        </div>
        <div class="card-part2">
          <div class="card-part2-hours">
            <h3 class="text-[2rem] font-[500] xl:text-[1rem]">${name}</h3>
            <img src="../images/icon-ellipsis.svg" alt=""  />
          </div>
          <div class="card-part2-period">
            <h2 class="text-[3rem] text-white font-[300]">${timeFrames.current}hrs</h2>
            <h2 class="card-part2-period-text">${previousTimeframe} - ${timeFrames.previous}hrs</h2>
          </div>
        </div>

    `
    section.innerHTML = stringToInject
    activityTracker.append(section)
})
  
}

buttons[1].click()


