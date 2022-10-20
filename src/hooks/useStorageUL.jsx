import { ref } from "firebase/storage";
import { storage } from "../lib/firebase";

const moutainRef = ref(storage, "mountains.jpg")