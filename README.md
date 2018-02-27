This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Presentation: The Collective (ft. React native)

The Collective is a co-living startup with big ambitions.

[Meetup link](https://www.meetup.com/React-Native-London/events/247717451/)

## Deploy

* `yarn build`
* replace `/static` with `./static` in `./build` (can use `sed -i -e 's/\/static/\.\/static/g' ./build/index.html`)
* replace `static/media` with `presentation-resident-app/static/media` in the built bundle (can use `sed -i -e 's/static\/media/presentation-resident-app\/static\/media/g' <bundle>`)
* `yarn deploy`
