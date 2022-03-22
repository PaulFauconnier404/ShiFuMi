import { Finger, FingerCurl } from '../FingerDescription';
import GestureDescription from '../GestureDescription';

// create new gesture with id "paperDescription"
const paperDescription = new GestureDescription('paper');

paperDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
paperDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
paperDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
paperDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
paperDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

export default paperDescription;