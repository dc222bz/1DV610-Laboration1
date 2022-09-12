/**
 * The main script file of the test-app.
 *
 * @author Daniel Carlsson <dc222bz@student.lnu.se>
 * @version 1.0.0
 */

import './components/my-person-data/index.js'
import './components/my-exercises/index.js'

document.querySelector('.container').appendChild(document.createElement('my-person-data'))
document.querySelector('.container').appendChild(document.createElement('my-exercises'))
