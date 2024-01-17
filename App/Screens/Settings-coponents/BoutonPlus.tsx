import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const BoutonPlus = () => {
return (
    <TouchableOpacity style={styles.boutonRond}>
        <Text style={styles.texteBouton}>+</Text>
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boutonRond: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white', // Couleur du fond du bouton
    justifyContent: 'center',
    alignItems: 'center',
    },
    texteBouton: {
    color: 'black', // Couleur du texte du bouton
    fontSize: 50,
    },
});

export default BoutonPlus;