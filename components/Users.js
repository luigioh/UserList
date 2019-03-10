<FlatList
          style={styles.list}
          data={this.state.dataSource}  
          renderItem={({item}) => 
              <Text
            style={styles.item}>
              {item.name}{"\n"}
              </Text>
            }
          keyExtractor = { (item, index) => index.toString() }
          ItemSeparatorComponent={this.renderSeparator}
        />