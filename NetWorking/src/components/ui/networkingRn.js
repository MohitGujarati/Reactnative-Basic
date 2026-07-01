import { View, Text, StyleSheet, FlatList, ActivityIndicator, RefreshControl, TextInput, Button } from "react-native";
import { useState, useEffect } from 'react';



function NetworkingRn() {

    const [postList, setPostList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [postTitle, setPostTitle] = useState([]);
    const [postUserId, setPostUserId] = useState([]);
    const [postCompleted, setPostCompleted] = useState([]);
    const [isPosting, setPosting] = useState(false);
    const [error, setError] = useState("");


    // i need total data = postlist + new data 
    const totalData = postList.length + 10;





    const fetchData = async (limit = 10) => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

            const data = await response.json();

            setPostList(data)
            setLoading(false)
        } catch (error) {
            console.log("Error fetching data: ", error);
            setError("Error fetching data")
            setLoading(false)
        }

    }

    const handleRefresh = () => {
        setRefreshing(true)
        fetchData(totalData)
        setRefreshing(false)
    }

    async function addPost() {

        setPosting(true);

        try {
            // Notice how the URL and the configuration object are both inside fetch(...)
            const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: postTitle,
                    userId: postUserId,
                    completed: postCompleted,
                })

            });




            // We can manually create the new post for the UI state
            const newPost = {
                id: postList.length + 1,
                title: postTitle,
                userId: postUserId,
                completed: postCompleted,
            };

            // Update state
            setPostList([newPost, ...postList]);
            setPosting(false);

            // Clear inputs
            setPostTitle('');
            setPostUserId('');
            setPostCompleted('');

        } catch (error) {
            console.log("Error adding post: ", error);
            setError("Error adding post")
            setPosting(false)
        }

    }


    useEffect(() => {
        fetchData()
    }, []);



    if (isLoading) {
        return (
            <View style={styles.loadingcontainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }
    return (
        <View style={styles.container}>
            {

                error ? (
                    <View style={styles.error}>
                        <Text>{error}</Text>
                    </View>

                ) : (
                    <>
                        <View >
                            <View style={styles.inputContainer}>

                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your name"
                                    value={postTitle}
                                    onChangeText={setPostTitle}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your userId"
                                    value={postUserId}
                                    onChangeText={setPostUserId}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Enter your completed"
                                    value={postCompleted}
                                    onChangeText={setPostCompleted}
                                />
                                <Button
                                    title={isPosting ? "Posting..." : "Add Post"}
                                    onPress={addPost}
                                    disabled={isPosting}
                                />
                            </View>

                        </View>

                        <FlatList
                            data={postList}
                            renderItem={({ item }) => (
                                <View style={styles.card}>
                                    <Text>{item.id}</Text>
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text style={item.completed ? styles.completed : styles.notCompleted}>{item.completed ? 'Completed' : 'Not Completed'}</Text>
                                </View>
                            )}
                            ItemSeparatorComponent={() => (
                                <View style={styles.separator}></View>
                            )}
                            ListEmptyComponent={
                                <Text style={styles.listText}>No data found</Text>
                            }
                            ListHeaderComponent={
                                <Text style={styles.listText}>TODO LIST STARTS FROM HERE</Text>
                            }
                            ListFooterComponent={
                                <Text style={styles.listText}>End of list</Text>
                            }
                            keyExtractor={(item) => item.id.toString()}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={handleRefresh}
                                />
                            }
                        />
                    </>
                )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        paddingHorizontal: 10

    },
    listContainer: {
        flex: 1,

    },

    loadingcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    card: {
        borderWidth: 1,
        borderColor: '#000',
        padding: 16,
        borderRadius: 8,

        backgroundColor: '#f9f7f7ff'

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,

    },
    completed: {
        color: 'green',
    },
    notCompleted: {
        color: 'red',
    },
    listText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },

    separator: {

        height: 1,
        width: '100%',
        backgroundColor: '#000',
        marginVertical: 10,
    },

    inputContainer: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc', // Lighter grey border for the inputs
        padding: 12,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#fff',
    },
    addButton: {
        backgroundColor: '#000',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },

    error: {
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    }

});


export default NetworkingRn;
