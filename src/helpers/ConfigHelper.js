import selectn from 'selectn'
import * as config from '../../config/index'

export default class ConfigHelper {
  static get (path) {
    return selectn(path, config)
  }
}
