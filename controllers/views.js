const renderIndexView = (req,res) => {
  res.render('home', {title: 'My cool website'})
}

const renderNotFoundView = (req, res) => {
  res.status(404).render('notFound', {title: 'Not Found'})
}

module.exports = {
  renderIndexView,
  renderNotFoundView
}
