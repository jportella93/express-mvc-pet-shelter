const renderIndexView = (req,res) => {
  res.render('home', {title: 'My cool website'})
}

const renderNotFoundView = (req, res) => {
  res.render('notFound', {title: 'Oopsie doopsie woobsie'})
}

module.exports = {
  renderIndexView,
  renderNotFoundView
}
