import num from './numFilter'
import str from './strFilter'
import date from './dateFilter'
export default {
    ...num,
    ...str,
    ...date,
}