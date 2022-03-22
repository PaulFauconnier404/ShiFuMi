import { Finger, FingerCurl } from '../FingerDescription';
import GestureDescription from '../GestureDescription';


// describe scissors gesture ✌️
const scissorsDescription = new GestureDescription('scissors');

// index and middle finger: stretched out
scissorsDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
scissorsDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);

// ring: curled
scissorsDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
scissorsDescription.addCurl(Finger.Ring, FingerCurl.HalfCurl, 1.0);

// pinky: curled
scissorsDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);
scissorsDescription.addCurl(Finger.Pinky, FingerCurl.HalfCurl, 1.0);

export default scissorsDescription;
