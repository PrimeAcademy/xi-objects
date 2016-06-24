var xi = {
  cohortName: 'Xi',
  instructors: ['joel', 'ryan', 'connor'],
  numStudents: 19,
  startDate: 'May 9th, 2016',
  graduationDate: 'September 9th, 2016',
  themeSong: {
    name: 'Your Love',
    artist: 'The Outfield'
  },
  color: 'BurlyWood',
  accentColor: 'Burgundy',
  mascot: 'Chewbaxter',
  alternateMascot: 'Eeyore',
  officialMusician: 'DJ Kerb$tomp',
  movie: 'The Sandlot',
  classroom: 3,
  bestCohortEver: true,
  canValidateAnyOfThisInfoOnGovernmentForms: false,
  numberOfSongsOnPlaylist: 50,
  generatePlaylist: function() {
    for(var i = 1; i <= this.numberOfSongsOnPlaylist; i++) {
      console.log(i + '. ' + this.themeSong.name + ' by ' + this.themeSong.artist);
    }
  }
}
