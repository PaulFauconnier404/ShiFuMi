import { GestureDescription, Finger, FingerCurl } from 'fingerpose';

// implémentation de la gestuelle de type "pierre"
const rockDescription = new GestureDescription('rock');

// tous les doigts doivent être pliés
rockDescription.addCurl(Finger.Index, FingerCurl.HalfCurl, 1,0);
rockDescription.addCurl(Finger.Middle, FingerCurl.FullCurl, 1.0);
rockDescription.addCurl(Finger.Ring, FingerCurl.FullCurl, 1.0);
rockDescription.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1.0);

// le pouce peut être étiré ou à moitié courbé
rockDescription.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
rockDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);

export default rockDescription;
// a = Finger
// o = FingerCurl
// l = FingerDirection
// r = Gestures

// C = t[S[T][0]],
// A = t[S[T + 1][1]],