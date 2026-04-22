import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F6FA',
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#FFF',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    height: 120,
    textAlignVertical: 'top',
  },
  inputFocused: {
    borderColor: '#2F80ED',
    shadowColor: '#2F80ED',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
    backgroundColor: '#2F80ED',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '600',
  },
  buttonDisabled: {
    backgroundColor: '#BDBDBD',
    opacity: 0.7,
  },
  card: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemId: {
    fontSize: 12,
    color: '#999',
  },
  errorMessage: {
    color: 'red',
    marginTop: 4,
  },
  iconSearch: {
    position: 'absolute',
    right: 12,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#2F80ED',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    zIndex: 10,
    elevation: 5,
  },
  section: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#999',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },

  description: {
    color: '#666',
    marginBottom: 12,
  },
  id: {
    color: '#999',
    fontSize: 12,
    marginBottom: 8,
  },

  date: {
    fontSize: 12,
    color: '#999',
  },
});
